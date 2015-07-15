package com.tlantic.service.seed.base;

import java.util.UUID;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;

/**
 *
 * @author andre.pinto
 */
@Component
public class HttpRequestInterceptor implements HandlerInterceptor {
    
    public boolean preHandle(HttpServletRequest request,
                             HttpServletResponse response,
                             Object handler) throws Exception {
        System.out.println("my interceptor");
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request,
                           HttpServletResponse response,
                           Object handler,
                           ModelAndView modelAndView) throws Exception {
        String token = UUID.randomUUID().toString().replace("-", "").toUpperCase();
        System.out.println(token);
        modelAndView.addObject("token", token);
    }

    @Override
    public void afterCompletion(HttpServletRequest request,
                                HttpServletResponse response,
                                Object handler, Exception ex) throws Exception {
        System.out.println("after");

    }
    
}
