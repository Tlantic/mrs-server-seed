
package com.tlantic.service.seed.service;

import com.tlantic.service.seed.model.User;
import com.tlantic.service.seed.service.contract.IUserService;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Component;

/**
 *
 * @author andre.pinto
 */
@Component
public class UserService implements IUserService{

    public List<User> getAll() throws Exception{
        List<User> result = new ArrayList<User>();
        result.add(new User(1, "MRS"));
        result.add(new User(2, "Tlantic"));
        return result;
    }
    
}
