package com.arshaa.leads.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.arshaa.leads.entity.Comment;
@Repository
public interface LeadHistoryRepo extends JpaRepository<Comment, Integer> {

}
