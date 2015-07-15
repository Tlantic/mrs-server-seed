package com.tlantic.service.seed.controller;

import com.tlantic.service.seed.base.Logging;
import com.tlantic.service.seed.base.RestResponse;
import com.tlantic.service.seed.business.contract.IUserBss;
import com.tlantic.service.seed.model.User;
import org.slf4j.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@Controller
@RequestMapping("/seed")
public class UserController {
    
    @Autowired
    IUserBss userBss;
            

   private static final Logger log = LoggerFactory
         .getLogger("logstash-socket");


    @RequestMapping(value = "/user/all", method=RequestMethod.GET)
    public ResponseEntity<RestResponse> getAll() {
        try {
           
            log.info("{message:{\"description\":\"get data\"}}");
            List<User> result = userBss.getAllUsers();
            return new ResponseEntity<RestResponse>(new RestResponse(RestResponse.RESULT_OK, result), HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<RestResponse>(new RestResponse(RestResponse.RESULT_ERROR, ex.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

  
}
