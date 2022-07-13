package com.timesheet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.timesheet.entity.Timesheet;

@Repository
public interface TimesheetRepository extends JpaRepository<Timesheet, Integer>{

}
