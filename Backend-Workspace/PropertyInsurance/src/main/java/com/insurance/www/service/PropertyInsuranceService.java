package com.insurance.www.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
//import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.insurance.www.model.CustomerLogin;
import com.insurance.www.model.CustomerPaymentDetails;
import com.insurance.www.model.CustomerSignup;
import com.insurance.www.model.FillDetails;
import com.insurance.www.model.StructureAndDetails;
import com.insurance.www.repository.CustomerLoginRepository;
import com.insurance.www.repository.CustomerPaymentDetailsRepository;
import com.insurance.www.repository.CustomerSignupRepository;
import com.insurance.www.repository.FillDetailsRepository;
import com.insurance.www.repository.PropertyInsuranceRepository;

@Service
public class PropertyInsuranceService 
{
	
	@Autowired
	PropertyInsuranceRepository propertyInsuranceRepository;
	
	public List<StructureAndDetails> getAllDetails()
	{
		return propertyInsuranceRepository.findAll();
	}
	public List<StructureAndDetails> getStructureDetailsByCustomerId(String customerId) {
        return propertyInsuranceRepository.findByCustomerId(customerId);
    }
	
	public StructureAndDetails createDetails( StructureAndDetails details )
	{
		return propertyInsuranceRepository.save(details);
	}	
	
	@Autowired
	CustomerSignupRepository customerSignupRepository;
	
	public List<CustomerSignup> getAllCustomers()
	{
		return customerSignupRepository.findAll();
	}
	public List<CustomerSignup> getCustomerById(String customerId) {
        return customerSignupRepository.findByCustomerId(customerId);
    }
	
	public CustomerSignup createCustomer(CustomerSignup customer)
	{
		
		String uniqueId = UUID.randomUUID().toString();
        customer.setCustomerId(uniqueId);
        
		return customerSignupRepository.save(customer);
	}
	
	 public List<CustomerSignup> getCustomerIdByMobileNo(long mobileno) 
	 {
		 return customerSignupRepository.findByMobileno(mobileno);
	 }
	
	@Autowired
	FillDetailsRepository fillDetailsRepository;
	
	public List<FillDetails> getAllData()
	{
		return fillDetailsRepository.findAll();
	}
	public List<FillDetails> getFillDetailsByCustomerId(String customerId)
	{
		return fillDetailsRepository.findByCustomerId(customerId);
	}
	public FillDetails createData(FillDetails data )
	{
		return fillDetailsRepository.save(data);
	}
	
	@Autowired
	CustomerPaymentDetailsRepository customerPaymentDetailsRepository;
	public List<CustomerPaymentDetails> getPaymentData()
	{
		return customerPaymentDetailsRepository.findAll();
	}
	public List<CustomerPaymentDetails> getPaymentDetailsByCustomerId(@PathVariable String customerId)
	{
		return customerPaymentDetailsRepository.findByCustomerId(customerId);
	}
	
	public CustomerPaymentDetails createPaymentData(CustomerPaymentDetails data )
	{
		return customerPaymentDetailsRepository.save(data);
	}
	
	@Autowired
	CustomerLoginRepository customerLoginRepository;
	public String login(CustomerLogin customerLogin) {
	    CustomerSignup user = customerSignupRepository.findByMobilenoAndPassword(customerLogin.getMobileno(), customerLogin.getPassword());
	    
	    if (user == null) {
	        return "Invalid username or password.";
	    }

	    else if (user.getPassword().equals(customerLogin.getPassword())) {
	        return "Login successful!";
	    } else {
	        return "Invalid username or password.";
	    }
	}
	
	public ResponseEntity<String> checkMobileNumber(String mobileNumber) 
	{
		List<CustomerSignup> customers = customerSignupRepository.findByMobileno(Long.parseLong(mobileNumber));
	    if (!customers.isEmpty()) {
	        return ResponseEntity.ok("Mobile number exists");
	    } else {
	        return ResponseEntity.ok("Mobile number is not exists");
	    }
	}

	
	
}
