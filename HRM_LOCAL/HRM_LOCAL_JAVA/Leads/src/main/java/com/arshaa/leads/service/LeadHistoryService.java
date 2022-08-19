package com.arshaa.leads.service;

import java.util.List;

import com.arshaa.leads.common.UpdateComment;
import com.arshaa.leads.entity.Comment;

public interface LeadHistoryService {
public Comment saveComments(Comment comment);
public Comment getCommentsById(int id);
public List<Comment> getAllCommentsById(String key);

public UpdateComment updateLeadsComment(UpdateComment ud ,Integer id );
}
