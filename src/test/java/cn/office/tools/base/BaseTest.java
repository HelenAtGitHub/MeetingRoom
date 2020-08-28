package cn.office.tools.base;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import cn.office.tools.Startup;


//@RunWith(SpringJUnit4ClassRunner.class)
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Startup.class)
@WebAppConfiguration
public class BaseTest {


    @Ignore
    @Test
    public void baseTest(){
    }

}