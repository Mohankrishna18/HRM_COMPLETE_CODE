package com.arshaa.emp.model;
import java.util.Date;

public class ProbhitionFields {
     private Date confirmationDate;
        private String feedBack;
        private String onboardingStatus;
        public Date getConfirmationDate() {
            return confirmationDate;
        }
        public void setConfirmationDate(Date confirmationDate) {
            this.confirmationDate = confirmationDate;
        }
        public String getFeedBack() {
            return feedBack;
        }
        public void setFeedBack(String feedBack) {
            this.feedBack = feedBack;
        }
        public String getOnboardingStatus() {
            return onboardingStatus;
        }
        public void setOnboardingStatus(String onboardingStatus) {
            this.onboardingStatus = onboardingStatus;
        }
        
}