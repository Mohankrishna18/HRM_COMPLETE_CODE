package com.arshaa.documentUpload_Service.model;

public class FileInfo {
	
	public FileInfo() {
		super();
		// TODO Auto-generated constructor stub
	}

private String name;
  private String url;
  private String onboardingId;
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getUrl() {
	return url;
}
public void setUrl(String url) {
	this.url = url;
}
public String getOnboardingId() {
	return onboardingId;
}
public void setOnboardingId(String onboardingId) {
	this.onboardingId = onboardingId;
}
public FileInfo(String name, String url, String onboardingId) {
	super();
	this.name = name;
	this.url = url;
	this.onboardingId = onboardingId;
}
  

  

}
