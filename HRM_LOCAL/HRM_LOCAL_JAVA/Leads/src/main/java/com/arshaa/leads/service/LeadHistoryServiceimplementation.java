package com.arshaa.leads.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.arshaa.leads.common.UpdateComment;
import com.arshaa.leads.entity.Comment;
import com.arshaa.leads.repository.LeadHistoryRepo;
@Service
public class LeadHistoryServiceimplementation implements LeadHistoryService{
	
	@Autowired
	private LeadHistoryRepo commentRepo;

	@Override
	public Comment saveComments(Comment comment) {
		
		Comment c = new Comment();
		java.sql.Date tsql =  new java.sql.Date (c.getDate().getTime());
		comment.setDate(tsql);
		// TODO Auto-generated method stub
		return commentRepo.save(comment);
	}

	@SuppressWarnings("deprecation")
	@Override
	public Comment getCommentsById(int id) {
		// TODO Auto-generated method stub
		return commentRepo.getById(id);
	}

	@Override
	public List<Comment> getAllCommentsById(String key) {
		// TODO Auto-generated method stub
		
		//List<Comment> comm = commentRepo.findAll(Sort.by(Sort.Direction.DESC,key));
		
		List<Comment> comm = commentRepo.findAll(Sort.by(Sort.Direction.DESC, key));

        List<Comment> gdto = new ArrayList<>();



        comm.forEach(s -> {

            Comment c = new Comment();

            c.setComment(s.getComment());
c.setDate(s.getDate());
c.setId(s.getId());
c.setLeadId(s.getLeadId());
           

        

            gdto.add(c);



        });

        return gdto;

    }

	@Override
	public UpdateComment updateLeadsComment(UpdateComment ud, Integer id) {
		// TODO Auto-generated method stub
		try {
			
		
		Comment c = commentRepo.getById(id);
		
	   ud.setId(id);
		java.sql.Date tsql =  new java.sql.Date (ud.getDate().getTime());
		c.setDate(tsql) ;
		
		c.setComment(ud.getComment());
		c.setLeadId(ud.getLeadId());
		 commentRepo.save(c);
		 
		
		 return ud ;
		}catch(Exception e) {
			e.getMessage();
		}
		return ud;
	}
	}


