package cn.office.tools.UtilTest;

import java.util.Calendar;

import org.junit.Test;

import cn.office.tools.base.BaseTest;
import cn.office.tools.utils.WorkDayUtil;

public class workDataTest extends BaseTest {
 
    @Test
    public void isWorkDayTest(){

        Calendar calendar = Calendar.getInstance();  

        int day=calendar.get(Calendar.DAY_OF_WEEK);
        System.out.println(day);
        System.out.println("------------------");
        int b=WorkDayUtil.checkHoliday(calendar);

        System.out.println(b);
    }
}