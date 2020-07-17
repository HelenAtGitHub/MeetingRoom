package cn.office.tools.usercenter.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import cn.office.tools.usercenter.service.UserService;

@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private UserService userService;

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        // 请求授权的规则~
        http.authorizeRequests().antMatchers("/**.js","/**","/authority/**", "/dist/**","/", "/plugins/**").permitAll().anyRequest()
                .authenticated().and().formLogin().loginPage("/authority/login").successForwardUrl("/authority/success")
                .usernameParameter("username").passwordParameter("password").loginProcessingUrl("/login").and().logout()
                .logoutSuccessUrl("/").and().rememberMe().rememberMeParameter("remember").and().csrf().disable();
                
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {

        // auth.inMemoryAuthentication().passwordEncoder(new
        // BCryptPasswordEncoder()).withUser("admin")
        // .password(new BCryptPasswordEncoder().encode("admin")).roles("Admin");
        auth.userDetailsService(userService).passwordEncoder(passwordEncoder());
    }

}
