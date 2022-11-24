package com.arshaa.hrm.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.arshaa.hrm.entity.Holidaymanagement;
import com.arshaa.hrm.model.HolidaysCount;
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
	/*API TO Update HOLIDAY 
	 *http://localhost:8065/holiday/updateholiday
	 *PAYLOAD: 
	{
	"holidayTitle":"Ramzan",
	"holidayDate":"2022-05-12",
	"updatedOn":"2022-04-28"
}
	 */	
	
	
	@PutMapping("/updateHolidayById/{holidayId}")
	public ResponseEntity updateHolidayById(@PathVariable  int holidayId ,@RequestBody Holidaymanagement newholidaymaster) {
		return serv.updateHolidayById(holidayId, newholidaymaster);
	}
		
	/*API TO Delete HOLIDAY 
	 *http://localhost:8065/holiday/updateholiday
	 */	

	@DeleteMapping("/deleteHoliday/{holidayId}")
	public ResponseEntity DeleteHoliday(@PathVariable int holidayId) {
		return serv.DeleteHoliday(holidayId);
	}
	
	@GetMapping("getDataByYearAndMonth/{year}/{month}")
	public ResponseEntity getData(@PathVariable int year,@PathVariable int month)
	{
	List<Holidaymanagement> hm=repo.findHolidaymanagementWithParticularYearAndMonth(year,month);



	return new ResponseEntity(hm,HttpStatus.OK);
	}
	
	@GetMapping("getDataCountByYearAndMonth/{year}/{month}")
	public ResponseEntity getDataCount(@PathVariable int year,@PathVariable int month)
	{
	HolidaysCount count=new HolidaysCount();
	int hm=repo.findHolidaymanagementCountWithParticularMonth(year,month);
	count.setHolidayCount(hm);
	return new ResponseEntity(hm,HttpStatus.OK);
	}
	
	@GetMapping("/{startDate}/{endDate}")
	public ResponseEntity <Integer> getWorkingDays(@PathVariable String startDate,@PathVariable String endDate) throws ParseException, Exception
	{
	return ResponseEntity.ok(serv.getWorkingDaysBetweenTwoDates(new SimpleDateFormat("yyyy-MM-dd").parse(startDate), new SimpleDateFormat("yyyy-MM-dd").parse(endDate)));
	}

	@GetMapping("/findHolidaysCountBetWeenTwoDates/{startDate}/{endDate}")
	public ResponseEntity <Integer> findHolidaysCountBetWeenTwoDates(@PathVariable String startDate,@PathVariable String endDate) throws ParseException, Exception
	{
	return ResponseEntity.ok(repo.findHolidaysCountBetWeenTwoDates(new SimpleDateFormat("yyyy-MM-dd").parse(startDate), new SimpleDateFormat("yyyy-MM-dd").parse(endDate)));
	}


	public HolidayManagementController() {
		// TODO Auto-generated constructor stub
	}
	@GetMapping("/getHolidaysCountByYearAndMonth/{year}/{month}")
	public ResponseEntity getHolidaysCount(@PathVariable int year,@PathVariable int month)
	{
	HolidaysCount count=new HolidaysCount();
	int hm=repo.findHolidaymanagementCountWithParticularMonth(year,month);
	count.setHolidayCount(hm);
	return new ResponseEntity(count,HttpStatus.OK);
	}

}
