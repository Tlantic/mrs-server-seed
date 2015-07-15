package com.tlantic.service.seed.config;

import com.tlantic.service.seed.base.HttpRequestInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.*;
import org.springframework.web.servlet.*;
import org.springframework.web.servlet.config.annotation.*;
import org.springframework.web.servlet.view.*;
import org.springframework.web.servlet.view.tiles2.*;


@Configuration
@ComponentScan("com.tlantic.service.seed")
@EnableWebMvc
public class WebConfig extends WebMvcConfigurerAdapter {
    
    @Autowired
    private HttpRequestInterceptor httpRequestInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(httpRequestInterceptor);
    }

   @Bean
   public ViewResolver viewResolver() {
      UrlBasedViewResolver viewResolver = new UrlBasedViewResolver();
      viewResolver.setViewClass(TilesView.class);
      return viewResolver;
   }

   @Bean
   public TilesConfigurer tilesConfigurer() {
      TilesConfigurer configurer = new TilesConfigurer();
      configurer.setDefinitions(new String[] { "/WEB-INF/jsp/tiles.xml" });
      configurer.setCheckRefresh(true);
      return configurer;
   }

   public void addResourceHandlers(ResourceHandlerRegistry registry) {
      registry.addResourceHandler("/resources/**").addResourceLocations("/resources/");
   }

}
