/* eslint-disable */

import React, { useState, useEffect } from 'react'
import './Record'
import Tag from './ModalTag'
import './UploadForm.css'
import Moment from 'moment'
import { useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { CreateStack, ClearStack } from '../../store.js'
import InstTag from './InstTag.js'
import axios from 'axios'
import CheckComplete from './CheckComplete'

const blobFile = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (event) => {
      resolve(event.target.result)
    }
    reader.readAsDataURL(file)
  })
function UploadForm(props) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const data = useSelector((state) => {
    return state.stack
  })
  const username = useSelector((state) => {
    return state.user.username
  })
  console.log(data)
  const dateNow = Moment().format('YYYYMMDDHHmm')
  dispatch(CreateStack(['videoName', dateNow + username]))

  const handleClose = () => {
    props.handle()
  }
  const object = props.src.src.src

  const filedownloadlink = window.URL.createObjectURL(object)

  const handleChange = (e) => {
    dispatch(CreateStack([e.target.name, e.target.value]))
  }
  const [enable, setEnable] = useState(true)
  useEffect(() => {
    if (data.remainDepth === 0) {
      setEnable((enable) => false)
    }
  }, [data])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!data.content || !data.music) {
      alert('빈칸을 입력해주세요')
    } else {
      if (data) {
        let testData = {
          content: data.content,
          music: data.music,
          instrument: data.instrument,
          tags: data.tags,
          heartCnt: data.heartCnt,
          remainDepth: data.remainDepth,
          isPublic: data.isPublic,
          isComplete: data.isComplete,
          prevStationId: data.prevStationId,
          videoName: data.videoName
          // delete: true
        }
        console.log(testData)
        const formData = new FormData()
        // 기본 정보
        formData.append(
          'info',
          new Blob([JSON.stringify(testData)], {
            type: 'application/json'
          })
        )

        // 파일 정보
        formData.append('file', object)
        axios
          .post(`/api/station/upload`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: localStorage.getItem('accessToken')
            }
          })
          .then(() => console.log('[스테이션 업로드] >> 성공'))
          .catch((error) => {
            console.error(error)
          })
      }
      navigate('/UploadLoading')

      handleClose()
      dispatch(ClearStack())
      window.URL.revokeObjectUrl(filedownloadlink)
    }
  }
  return (
    <div className="upload-form-container">
      <div className="section-right">
        <video
          className="stack-video"
          src={filedownloadlink}
          width={258}
          height={402}
          style={{ objectFit: 'cover' }}
          controls
        />
        {filedownloadlink && (
          <a href={filedownloadlink} download>
            <button className="button-download">나의 스택 다운로드</button>
          </a>
        )}
      </div>
      <form className="section-left" onSubmit={handleSubmit}>
        <div className="input__items">
          <label className="upload-label">노래 제목</label>
          <input
            className="upload-input"
            type="text"
            name="music"
            value={data.music}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="input__items">
          <label className="upload-label">스테이션 설명</label>
          <textarea
            className="upload-input"
            type="text"
            name="content"
            value={data.content}
            onChange={(e) => handleChange(e)}
            style={{ height: '90px' }}
          />
        </div>
        <div className="input__items">
          <label className="upload-label">태그</label>
          <Tag />
        </div>
        <div className="input__items">
          <InstTag />
        </div>
        <div className="checkbox-container">
          <div className="input__items">
            <label className="upload-label">공개 범위 설정</label>
            <div>
              <label style={{ marginRight: '10px' }}>
                <input
                  type="radio"
                  name="isPublic"
                  value="public"
                  onChange={(e) => handleChange(e)}
                  defaultChecked
                />
                공개
              </label>
              <label>
                <input
                  type="radio"
                  name="isPublic"
                  value="private"
                  onChange={(e) => handleChange(e)}
                  style={{ fontSize: '0.9em' }}
                />
                비공개
              </label>
            </div>
          </div>
          {enable && <CheckComplete />}
        </div>
        <div className="upload-btn-container">
          <button
            type="submit"
            className="button-download button-complete"
            style={{ width: '20%' }}
            onClick={handleSubmit}
          >
            업로드
          </button>
        </div>
      </form>
    </div>
  )
}
export default UploadForm
