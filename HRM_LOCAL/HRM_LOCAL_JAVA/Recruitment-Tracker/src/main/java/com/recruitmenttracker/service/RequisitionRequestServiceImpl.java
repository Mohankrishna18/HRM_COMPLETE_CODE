package com.recruitmenttracker.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.recruitmenttracker.entity.RequisitionRequestEntity;
import com.recruitmenttracker.modal.RequisitionRequestResponse;
import com.recruitmenttracker.repository.RequisitionRequestRepository;

@Service
public class RequisitionRequestServiceImpl implements RequisitionRequestInterface {

	@Autowired(required=true)
	private RequisitionRequestRepository rrRepository;
	
	@Override
	public ResponseEntity createRR(RequisitionRequestEntity newRR) {
		RequisitionRequestResponse rrr = new RequisitionRequestResponse<>();
		try{
			//newRR.setWorkflowStatus("Waiting for BUHead Approval");
			newRR.setRrfStatus("Pending Approval");
			RequisitionRequestEntity raiseRequest = rrRepository.save(newRR);
		
		rrr.setStatus(true);
		rrr.setMessage("Data Submitted Successfully!!!");
		rrr.setData(raiseRequest);
		return new ResponseEntity(rrr, HttpStatus.OK);
		} catch (Exception e) {
			rrr.setStatus(false);
			rrr.setMessage(e.getMessage());
			return new ResponseEntity(rrr,HttpStatus.OK);
		}
	}

	@Override
	public ResponseEntity getAllRequisitions() {
		RequisitionRequestResponse rrr = new RequisitionRequestResponse<>();
		List<RequisitionRequestEntity> requisitions = rrRepository.findAll();
		try {
			if(!requisitions.isEmpty()) {
				rrr.setStatus(true);
				rrr.setMessage("Data Fetching");
				rrr.setData(requisitions);
				return new ResponseEntity(rrr, HttpStatus.OK);
			}
			else {
				rrr.setStatus(false);
				rrr.setMessage("Data Not Found");
				return new ResponseEntity(rrr, HttpStatus.OK);
			}
		}catch(Exception e) {
			rrr.setStatus(false);
			rrr.setMessage("Something went Wrong");
			return new ResponseEntity(rrr, HttpStatus.OK);
		}
	}

	@Override
	public ResponseEntity deleteRRequest(long rrfId) {
		RequisitionRequestResponse rrr =new RequisitionRequestResponse<>();
		try {
			rrRepository.deleteById(rrfId);
			rrr.setMessage("Deleted Requisition Request succesfully");
			rrr.setStatus(true);
			return new ResponseEntity(rrr,HttpStatus.OK);
		}catch(Exception e) {
			rrr.setMessage("Can't delete Requisition Request");
			rrr.setStatus(false);
			return new ResponseEntity(rrr,HttpStatus.OK);
			
		}
	}

	@Override
	public ResponseEntity updateRR(long rrfId, RequisitionRequestEntity rrUpdate) {
		RequisitionRequestResponse rrr = new RequisitionRequestResponse<>();
		try {
			RequisitionRequestEntity rrEntity = rrRepository.getById(rrfId);
			rrEntity.setJobTitle(rrUpdate.getJobTitle());
			rrEntity.setDescription(rrUpdate.getDescription());
			rrEntity.setRrfCat(rrUpdate.getRrfCat());
			rrEntity.setTechnology(rrUpdate.getTechnology());
			rrEntity.setPocname(rrUpdate.getPocname());
			rrEntity.setWorkflowStatus(rrUpdate.getWorkflowStatus());
			rrEntity.setPositions(rrUpdate.getPositions());
			rrEntity.setpSkills(rrUpdate.getpSkills());
			rrEntity.setsSkills(rrUpdate.getsSkills());
			rrEntity.setWorkingHours(rrUpdate.getWorkingHours());
			rrEntity.setWorkLocation(rrUpdate.getWorkLocation());
			rrEntity.setEmpType(rrUpdate.getEmpType());
			rrEntity.setRole(rrUpdate.getRole());
			rrEntity.setYoe(rrUpdate.getYoe());
			rrEntity.setRate(rrUpdate.getRate());
			rrEntity.setProjectName(rrUpdate.getProjectName());
			rrEntity.setClientName(rrUpdate.getClientName());
			rrEntity.setDepartmentName(rrUpdate.getDepartmentName());
			rrEntity.setRaisedBy(rrUpdate.getRaisedBy());
			rrEntity.setRaisedOn(rrUpdate.getRaisedOn());
			rrEntity.setTextAreaDesc(rrUpdate.getTextAreaDesc());
			rrEntity.setComments(rrUpdate.getComments());
			
			RequisitionRequestEntity RRsEntity = rrRepository.save(rrEntity);
			System.out.println(RRsEntity);
			rrr.setStatus(true);
			rrr.setMessage("Update successfully");
			rrr.setData(RRsEntity);
			return new ResponseEntity(rrr,HttpStatus.OK);
			
		}catch(Exception e){
			rrr.setStatus(true);
			rrr.setMessage("Something went wrong");
			return new ResponseEntity(rrr,HttpStatus.OK);
		}
	}

	@Override
	public ResponseEntity updateWorkflowStatusByJobID(long rrfId) {
		RequisitionRequestResponse rrr = new RequisitionRequestResponse<>();
		try {
			RequisitionRequestEntity rrEntity = rrRepository.getById(rrfId);
			rrEntity.setWorkflowStatus("Waiting for Buhead approval");
			RequisitionRequestEntity RRsEntity = rrRepository.save(rrEntity);
		} catch (Exception e) {
			
		}
		return null;
	}

	// GSDR Changes
    @Override
        public List<RequisitionRequestEntity> getByWorkflowStatus(String userType) {
            
            if(userType.equalsIgnoreCase("buhead")){
            List<RequisitionRequestEntity> requisitionAll = rrRepository.getByWorkflowStatus("Waiting for BUHead Approval");
            return requisitionAll;
            }
            else {
                List<RequisitionRequestEntity> requisitionAll = rrRepository.getByWorkflowStatus("Waiting for PMO Approval");
            return requisitionAll;
            }
        }



       @Override
        public RequisitionRequestEntity modifyRequisitionStatus(RequisitionRequestEntity requisition, long rrfId, String userType)
        {
            
            RequisitionRequestEntity requisitionUpdate = rrRepository.findByRrfId(rrfId);
            System.out.println("userType:"+userType);
            if(userType.equalsIgnoreCase("buhead")) {
                requisitionUpdate.setBuheadApprove(requisition.getBuheadApprove());
                requisitionUpdate.setWorkflowStatus(requisition.getWorkflowStatus());
                RequisitionRequestEntity requisitionModify = rrRepository.save(requisitionUpdate);
                return requisitionModify;
                
            }
            
            else if(userType.equalsIgnoreCase("pmohead")) {
                requisitionUpdate.setPmoheadApprove(requisition.getPmoheadApprove());
                requisitionUpdate.setWorkflowStatus("Approved");
                
                RequisitionRequestEntity requisitionModify = rrRepository.save(requisitionUpdate);
                return requisitionModify;
            }
            
            else {
                return requisitionUpdate;
            }
        }
        
        



       @Override
        public RequisitionRequestEntity rejectRequisition(RequisitionRequestEntity requisition, long rrfId, String userType) {
            RequisitionRequestEntity requisitionReject = rrRepository.findByRrfId(rrfId);
            if(userType.equalsIgnoreCase("buhead")) {
                requisitionReject.setBuheadReject(requisition.getBuheadReject());
                requisitionReject.setWorkflowStatus("Rejected");
                RequisitionRequestEntity requisitionReject1 = rrRepository.save(requisitionReject);
                return requisitionReject1;
            }
            else if(userType.equalsIgnoreCase("pmohead")) {
                requisitionReject.setPmoheadReject(requisition.getPmoheadReject());
                requisitionReject.setWorkflowStatus("Rejected");
                RequisitionRequestEntity resignReject1 = rrRepository.save(requisitionReject);
                return resignReject1;
            }
            
            else {
                return requisitionReject;
            }
            
        }

       @Override
       public ResponseEntity getRequisitionsByRrfStatus() {
           RequisitionRequestResponse rrr = new RequisitionRequestResponse<>();
           try {
              List<RequisitionRequestEntity> rfs = rrRepository.findByRrfStatus("Open");
               rrr.setStatus(true);
               rrr.setMessage("Geting Data Succussfully");
               rrr.setData(rfs);
               return new ResponseEntity(rrr, HttpStatus.OK);
           } catch (Exception e) {
               rrr.setStatus(true);
               rrr.setMessage("Something went wrong");
               return new ResponseEntity(e.getMessage(), HttpStatus.OK);
           }
       }

       @Override
       public ResponseEntity getRequisitionsByRrfId(long rrfId) {
           RequisitionRequestResponse rrr = new RequisitionRequestResponse<>();
           try {



              Optional<RequisitionRequestEntity> rfs = rrRepository.findById(rrfId);
               rrr.setStatus(true);
               rrr.setMessage("Geting Data Succussfully");
               rrr.setData(rfs);
               return new ResponseEntity(rrr, HttpStatus.OK);
           } catch (Exception e) {
               rrr.setStatus(true);
               rrr.setMessage("Something went wrong");
               return new ResponseEntity(e.getMessage(), HttpStatus.OK);
           }
       }
}
