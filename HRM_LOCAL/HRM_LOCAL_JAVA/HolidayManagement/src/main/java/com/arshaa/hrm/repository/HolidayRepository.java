package com.arshaa.hrm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.arshaa.hrm.entity.Holidaymanagement;

public interface HolidayRepository extends JpaRepository<Holidaymanagement, Integer> {

	@Query(value="select * from holidaymaster where year(holidaymaster.holiday_date)=?1 and month(holidaymaster.holiday_date) = ?2", nativeQuery=true)
	List<Holidaymanagement> findHolidaymanagementWithParticularYearAndMonth(@Param("year") Integer year,@Param("month") Integer month);
	
	@Query(value="select count(*) from holidaymaster where year(holidaymaster.holiday_date)=?1 and month(holidaymaster.holiday_date) = ?2", nativeQuery=true)
	int findHolidaymanagementCountWithParticularMonth(@Param("year") Integer year,@Param("month") Integer month );

}
