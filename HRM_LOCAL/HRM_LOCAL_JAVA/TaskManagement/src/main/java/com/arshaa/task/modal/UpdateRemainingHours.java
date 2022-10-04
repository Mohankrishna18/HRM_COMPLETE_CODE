package com.arshaa.task.modal;





public class UpdateRemainingHours {
    private int taskId;
    private double remainingHours;
    private double actualHours;
    private double estimatedHours;
    public int getTaskId() {
        return taskId;
    }
    public void setTaskId(int taskId) {
        this.taskId = taskId;
    }
    public double getRemainingHours() {
        return remainingHours;
    }
    public void setRemainingHours(double remainingHours) {
        this.remainingHours = remainingHours;
    }
    public double getActualHours() {
        return actualHours;
    }
    public void setActualHours(double actualHours) {
        this.actualHours = actualHours;
    }
    public double getEstimatedHours() {
        return estimatedHours;
    }
    public void setEstimatedHours(double estimatedHours) {
        this.estimatedHours = estimatedHours;
    }
    public UpdateRemainingHours(int taskId, double remainingHours, double actualHours, double estimatedHours) {
        super();
        this.taskId = taskId;
        this.remainingHours = remainingHours;
        this.actualHours = actualHours;
        this.estimatedHours = estimatedHours;
    }
    
}

