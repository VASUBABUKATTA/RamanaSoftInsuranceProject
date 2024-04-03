package com.insurance.www.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
//import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.insurance.www.model.CustomerLogin;
import com.insurance.www.model.CustomerPaymentDetails;
import com.insurance.www.model.CustomerSignup;
import com.insurance.www.model.FillDetails;
import com.insurance.www.model.StructureAndDetails;
import com.insurance.www.service.PropertyInsuranceService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")

public class PropertyInsuranceController 
{
	
	@Autowired
	PropertyInsuranceService propertyInsuranceService;
	
	@GetMapping("/getStructure")
	public List<StructureAndDetails> getAllDetails()
	{
		return propertyInsuranceService.getAllDetails();
	}
	@GetMapping("/getStructureByCustomerId/{customerId}")
    public List<StructureAndDetails> getStructureDetailsByCustomerId(@PathVariable String customerId) {
        return propertyInsuranceService.getStructureDetailsByCustomerId(customerId);
    }
	
	@PostMapping("/putStructure")
	public StructureAndDetails createDetails(@RequestBody StructureAndDetails details )
	{
		return propertyInsuranceService.createDetails(details);
	}
	
	
	@GetMapping("/getCustomer")
	public List<CustomerSignup> getAllCustomers()
	{
		return propertyInsuranceService.getAllCustomers();
	}
	
	 @GetMapping("/getCustomerById/{customerId}")
	  public List<CustomerSignup> getCustomerById(@PathVariable String customerId)
	 {
	        return propertyInsuranceService.getCustomerById(customerId);
	 }
	 
	 @GetMapping("/getCustomerByMobileNumber/{mobileno}")
	  public List<CustomerSignup> getCustomerIdByMobileNo(@PathVariable long mobileno) 
	 {
	        return propertyInsuranceService.getCustomerIdByMobileNo(mobileno);
	  }
	
	@PostMapping("/putCustomer")
	public CustomerSignup createCustomer(@RequestBody CustomerSignup customer)
	{
		return propertyInsuranceService.createCustomer(customer);
	}
	
	@GetMapping("/getData")
	public List<FillDetails> getAllData()
	{
		return propertyInsuranceService.getAllData();
	}
	
	@GetMapping("/getfillDetailsByCustomerId/{customerId}")
	public List<FillDetails> getFillDetailsByCustomerId(@PathVariable String customerId)
	{
		return propertyInsuranceService.getFillDetailsByCustomerId(customerId);
	}
	
	@PostMapping("/putData")
	public FillDetails createData(@RequestBody FillDetails data )
	{
		return propertyInsuranceService.createData(data);
	}
	
	@GetMapping("/getPaymentData")
	public List<CustomerPaymentDetails> getPaymentData()
	{
		return propertyInsuranceService.getPaymentData();
	}
	@GetMapping("/getPaymentDetailsByCustomerId/{customerId}")
	public List<CustomerPaymentDetails> getPaymentDetailsByCustomerId(@PathVariable String customerId)
	{
		return propertyInsuranceService.getPaymentDetailsByCustomerId(customerId);
	}
	
	@PostMapping("/putPaymentData")
	public CustomerPaymentDetails createPaymentData(@RequestBody CustomerPaymentDetails data )
	{
		return propertyInsuranceService.createPaymentData(data);
	}
	
	@PostMapping("/login")
	public String login(@RequestBody CustomerLogin customerLogin ) 
	{
		return propertyInsuranceService.login(customerLogin);
	}
	
	@GetMapping("/checkMobileNumber/{mobileNumber}")
	public ResponseEntity<String> checkMobileNumber(@PathVariable String mobileNumber) {
		return propertyInsuranceService.checkMobileNumber(mobileNumber);
	}

	

}
