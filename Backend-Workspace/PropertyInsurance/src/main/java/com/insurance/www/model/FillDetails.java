package com.insurance.www.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class FillDetails 
{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column
	private String gender;
	@Column
	private String fullname;
	@Column
	private String dob;
	@Column
	private String pancard;
	
	@Column
	private String  propertypincode;
	@Column
	private String  propertyhouseNo;
	@Column
	private String propertystreetNo;
	@Column
	private String currentaddress;
	
	@Column
	private String  pincode;
	@Column
	private String houseno;
	@Column
	private String streetno;
	
	@Column
	private String customerId;
    @Column
    private String paymentId;
    
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getFullname() {
		return fullname;
	}
	public void setFullname(String fullname) {
		this.fullname = fullname;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getPancard() {
		return pancard;
	}
	public void setPancard(String pancard) {
		this.pancard = pancard;
	}
	public String getPropertypincode() {
		return propertypincode;
	}
	public void setPropertypincode(String propertypincode) {
		this.propertypincode = propertypincode;
	}
	public String getPropertyhouseNo() {
		return propertyhouseNo;
	}
	public void setPropertyhouseNo(String propertyhouseNo) {
		this.propertyhouseNo = propertyhouseNo;
	}
	public String getPropertystreetNo() {
		return propertystreetNo;
	}
	public void setPropertystreetNo(String propertystreetNo) {
		this.propertystreetNo = propertystreetNo;
	}
	public String getCurrentaddress() {
		return currentaddress;
	}
	public void setCurrentaddress(String currentaddress) {
		this.currentaddress = currentaddress;
	}
	public String getPincode() {
		return pincode;
	}
	public void setPincode(String pincode) {
		this.pincode = pincode;
	}
	public String getHouseno() {
		return houseno;
	}
	public void setHouseno(String houseno) {
		this.houseno = houseno;
	}
	public String getStreetno() {
		return streetno;
	}
	public void setStreetno(String streetno) {
		this.streetno = streetno;
	}
	public String getCustomerId() {
		return customerId;
	}
	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}
	public String getPaymentId() {
		return paymentId;
	}
	public void setPaymentId(String paymentId) {
		this.paymentId = paymentId;
	}
	public FillDetails(long id, String gender, String fullname, String dob, String pancard, String propertypincode,
			String propertyhouseNo, String propertystreetNo, String currentaddress, String pincode, String houseno,
			String streetno, String customerId, String paymentId) {
		super();
		this.id = id;
		this.gender = gender;
		this.fullname = fullname;
		this.dob = dob;
		this.pancard = pancard;
		this.propertypincode = propertypincode;
		this.propertyhouseNo = propertyhouseNo;
		this.propertystreetNo = propertystreetNo;
		this.currentaddress = currentaddress;
		this.pincode = pincode;
		this.houseno = houseno;
		this.streetno = streetno;
		this.customerId = customerId;
		this.paymentId = paymentId;
	}
	public FillDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    
	

}
