
package com.tlantic.service.base;

/**
 *
 * @author andre.pinto
 */
public class RestResponse<T> {
    
    public static String RESULT_OK = "ok";
    public static String RESULT_ERROR = "error";
        
    private String status;
    private T responseBody;
    
    public RestResponse(String status, T responseBody){
        this.status = status;
        this.responseBody = responseBody;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    

    public T getResponseBody() {
        return responseBody;
    }

    public void setResponseBody(T responseBody) {
        this.responseBody = responseBody;
    }
    
    
        
}