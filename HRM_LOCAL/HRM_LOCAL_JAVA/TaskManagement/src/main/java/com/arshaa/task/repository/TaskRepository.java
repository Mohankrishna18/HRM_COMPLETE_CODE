package com.arshaa.task.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.arshaa.task.entity.TaskEntity;



@Repository
public interface TaskRepository extends JpaRepository<TaskEntity, Integer>
{

	
	 public List<TaskEntity> getTaskByUserId(String userId);
	 public List<TaskEntity> getTaskByAssignedTo(String assignedTo);
	public List<TaskEntity> getTaskByEmployeeId(String employeeId);
	public List<TaskEntity> findByEmployeeIdAndStatus(String employeeId, String status);
    @Query(value="SELECT SUM(actual_hours) FROM task_management.task WHERE task_id=:taskId", nativeQuery=true)
    int findtotalOfActualHours(@Param("taskId") int taskId);
    
   @Query(value="SELECT * FROM task where month(assign_date)=?1 and year(assign_date)=?2 and employee_id=?3", nativeQuery=true)
   List<TaskEntity> getTaskByEmployeeIdAndDate(@Param("month")int month,@Param("year") int year,@Param("employee_id") String employeeId);

	 
}