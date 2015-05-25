/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.tlantic.service.seed.service.contract;

import com.tlantic.service.seed.model.User;
import java.util.List;
import org.springframework.stereotype.Component;

/**
 *
 * @author andre.pinto
 */
@Component
public interface IUserService {
    public List<User> getAll() throws Exception;
}
