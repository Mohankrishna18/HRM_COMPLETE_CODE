package com.arshaa.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.arshaa.entity.BetweenDates;
@Repository
public interface BetweenDatesRepo extends JpaRepository<BetweenDates, Integer> {

	@Transactional
    @Modifying
       @Query ( value="delete  p from between_dates  p  left join employeeleaves e ON  e.leave_status='Rejected'where p.employeeleave_id=:employeeleaveId" ,nativeQuery=true)
       void   deleteDates(@Param("employeeleaveId")Integer employeeleaveId);

	List<BetweenDates> findByEmployeeId(String employeeId);

	





}
