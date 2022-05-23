package com.arshaa.hrm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.arshaa.hrm.entity.Holidaymanagement;
import com.arshaa.hrm.repository.HolidayRepository;
import com.arshaa.hrm.service.HolidayService;


@RequestMapping("/holiday")
@RestController
@CrossOrigin("*")
public class HolidayManagementController {

	@Autowired
	private HolidayRepository repo;
	@Autowired
	private HolidayService serv;
//	Link to my jira Ticket - https://spartansbarbecue.atlassian.net/browse/HA-28
	/*API TO POST HOLIDAY 
	 *http://localhost:8065/holiday/addholiday
	 *PAYLOAD: 
	{
	"holidayTitle":"Ugadi",
	"holidayDate":"2022-04-02",
	"holidayStatus":1,
	"updatedOn":"2022-04-28",
    "updatedBy":1
}
	 */	
	@PostMapping("/addholiday")
	public ResponseEntity addHoliday( @RequestBody Holidaymanagement newholiday)
	{				
			return serv.addHoliday(newholiday);
	}
	/*API TO GET ALL HOLIDAYS
	 * http://localhost:8065/holiday/getAllHolidays
	 */	
	@GetMapping("/getAllHolidays")
	public ResponseEntity getAllHolidays()
	{
		return serv.getHolidays();
	}
	public HolidayManagementController() {
		// TODO Auto-generated constructor stub
	}

}
