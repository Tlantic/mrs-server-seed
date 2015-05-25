package com.tlantic.service.seed.business.contract;

import com.tlantic.service.seed.model.User;
import java.util.List;
import org.springframework.stereotype.Component;

/**
 *
 * @author andre.pinto
 */
@Component
public interface IUserBss {
    public List<User> getAllUsers() throws Exception;
}
