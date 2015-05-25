/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.tlantic.service.seed.business;

import com.tlantic.service.seed.business.contract.IUserBss;
import com.tlantic.service.seed.model.User;
import com.tlantic.service.seed.service.contract.IUserService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 *
 * @author andre.pinto
 */
@Component
public class UserBss implements IUserBss{
    
    @Autowired
    IUserService userService;
     
    public List<User> getAllUsers() throws Exception{
        return userService.getAll();
    }
    
}
