package com.tlantic.service.seed.controller;

import com.tlantic.service.seed.model.User;
import org.slf4j.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;


@Controller
@RequestMapping("/api")
public class UserController {

   private static final Logger log = LoggerFactory
         .getLogger(UserController.class);


     
   @RequestMapping(value = "/name", method=RequestMethod.GET)
    public @ResponseBody User sayHello() {
        return new User(1, "Andre");
    }

  
}
