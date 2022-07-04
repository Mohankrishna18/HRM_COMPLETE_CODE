package com.attendance.repository;

import java.sql.Time;
import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.attendance.entity.AttendanceLog;

@Repository
public interface AttendanceRepo extends JpaRepository<AttendanceLog, Integer>{

	@Query(value="select * from employeeattendance  where month(employeeattendance.punch_in) = ?1", nativeQuery=true)
	List<AttendanceLog> findAttendanceLogWithParticularMonth(@Param("month") Integer month);
	
	@Query(value="select count(*) from employeeattendance  where month(employeeattendance.punch_in) = ?1 and employee_id=?2", nativeQuery=true)
	int findAttendanceLogCountWithParticularMonth(@Param("month") Integer month,@Param("employee_id")String employeeId );

	//boolean existsByPunchIn(Date punchIn);
	
	Boolean existsByEmployeeIdAndPunchinDate(String employeeId,Date punchinDate);
//	testing purpose


@Query(value="SELECT TIMEDIFF(employeeattendance.punch_out,employeeattendance.punch_in) FROM employeeattendance Where employee_id=?1 AND date=?2",nativeQuery = true)
Time getTime(String employeeId,Date punchinDate);


	AttendanceLog getByEmployeeId(String employeeId);
	List<AttendanceLog> getAllByEmployeeId(String employeeId);

	AttendanceLog getByEmployeeIdAndPunchinDate(String employeeId, Date punchinDate);

	//boolean existsByEmployeeIdAndAttendanceDate(String employeeId, Date attendanceDate);

	//boolean existsByEmployeeIdAndPunchoutDate(String employeeId, Date punchout);

}
