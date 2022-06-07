package com.attendance.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.attendance.entity.AttendanceLog;

@Repository
public interface AttendanceRepo extends JpaRepository<AttendanceLog, Integer>{

	@Query(value="select * from attendance_log  where month(attendance_log.punch_in) = ?1", nativeQuery=true)
	List<AttendanceLog> findAttendanceLogWithParticularMonth(@Param("month") Integer month);
	
	@Query(value="select count(*) from attendance_log  where month(attendance_log.punch_in) = ?1 and employee_id=?2", nativeQuery=true)
	int findAttendanceLogCountWithParticularMonth(@Param("month") Integer month,@Param("employee_id")String employeeId );
}
