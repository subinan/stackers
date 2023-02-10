/* eslint-disable */
import React from 'react'
import '../Station.css'
import profile1 from '../assets/profile.png'
import profile2 from '../assets/profilePicture1.png'
import profile3 from '../assets/profilePicture2.png'
import profile4 from '../assets/profilePicture3.png'

function StackerListItem(props) {
  const musicians = props.musicians
  // console.log(musicians)
  const Participant = [
    {
      id: 1,
      username: 'ricot',
      profilePicture: { profile1 }
    },
    {
      id: 2,
      username: 'flamingo',
      profilePicture: { profile2 }
    },
    {
      id: 3,
      username: 'piece',
      profilePicture: { profile3 }
    },
    {
      id: 4,
      username: 'LeeCM',
      profilePicture: { profile4 }
    }
  ]
  // for (let i = 0; i < Participant.length; i++) {
  //   const picture = Participant[i].profilePicture
  //   const name = Participant[i].username
  //   console.log(picture)
  //   lst.push(
  //     <div key={Participant[i].id}>
  //       <img src={picture} alt="picture" />
  //       <p>{name}</p>
  //     </div>
  //   )
  // }
  // console.log(lst)

  return (
    <div className="station-Participants">
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%'
        }}
      >
        <div style={{ padding: '5px 5px 5px 5px' }}>
          <svg
            width="17"
            height="14"
            viewBox="0 0 17 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.25 6.5C6.11195 6.5 6.9386 6.15759 7.5481 5.5481C8.15759 4.9386 8.5 4.11195 8.5 3.25C8.5 2.38805 8.15759 1.5614 7.5481 0.951903C6.9386 0.34241 6.11195 0 5.25 0C4.38805 0 3.5614 0.34241 2.9519 0.951903C2.34241 1.5614 2 2.38805 2 3.25C2 4.11195 2.34241 4.9386 2.9519 5.5481C3.5614 6.15759 4.38805 6.5 5.25 6.5ZM10.937 11.645C11.467 11.862 12.141 12 12.999 12C16.999 12 16.999 9 16.999 9C16.999 8.60235 16.8411 8.22097 16.56 7.93969C16.2789 7.65842 15.8977 7.50027 15.5 7.5H10.872C11.265 7.976 11.501 8.585 11.501 9.25V9.606C11.499 9.6902 11.4933 9.77428 11.484 9.858C11.4165 10.4828 11.2303 11.0892 10.937 11.645ZM15.5 4C15.5 4.66304 15.2366 5.29893 14.7678 5.76777C14.2989 6.23661 13.663 6.5 13 6.5C12.337 6.5 11.7011 6.23661 11.2322 5.76777C10.7634 5.29893 10.5 4.66304 10.5 4C10.5 3.33696 10.7634 2.70107 11.2322 2.23223C11.7011 1.76339 12.337 1.5 13 1.5C13.663 1.5 14.2989 1.76339 14.7678 2.23223C15.2366 2.70107 15.5 3.33696 15.5 4ZM0 9.5C0 8.96957 0.210714 8.46086 0.585786 8.08579C0.960859 7.71071 1.46957 7.5 2 7.5H8.5C9.03043 7.5 9.53914 7.71071 9.91421 8.08579C10.2893 8.46086 10.5 8.96957 10.5 9.5C10.5 9.5 10.5 13.5 5.25 13.5C0 13.5 0 9.5 0 9.5ZM11.5 9.606L11.497 9.67L11.499 9.606H11.5Z"
              fill="#2A2096"
            />
          </svg>
        </div>
        <div className="station-Participant">
          <p className="station-writer">
            <img src={profile1} alt="profile" />
          </p>
          <p className="station-Participant-name">{Participant[0].username}</p>
        </div>
        <div className="station-Participant">
          <p className="station-user">
            <img src={profile2} alt="profile" />
          </p>
          <p className="station-Participant-name">{Participant[1].username}</p>
        </div>
        <div className="station-Participant">
          <p className="station-user">
            <img src={profile3} alt="profile" />
          </p>
          <p className="station-Participant-name">{Participant[2].username}</p>
        </div>
        <div className="station-Participant">
          <p className="station-user">
            <img src={profile4} alt="profile" />
          </p>
          <p className="station-Participant-name">{Participant[3].username}</p>
        </div>
      </div>
    </div>
  )
}

export default StackerListItem
