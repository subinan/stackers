package com.ssafy.stackers.repository;

import com.ssafy.stackers.model.PlayableInstrument;
import jakarta.transaction.Transactional;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

public interface PlayableInstrumentRepository extends JpaRepository<PlayableInstrument, Long> {

    Optional<PlayableInstrument> findByMemberIdAndInstrumentId(Long memberId, Long instrumentId);

    boolean existsByMemberIdAndInstrumentId(Long id, Long id1);

    @Modifying
    @Transactional
    void deleteByMemberIdAndInstrumentId(Long memberId, Long instrumentId);

}
