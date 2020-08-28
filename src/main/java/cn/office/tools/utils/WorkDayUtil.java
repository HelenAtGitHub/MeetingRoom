package cn.office.tools.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
/**
 * ClassName: WorkDayUtil
 * 
 * @Description: TODO 节假日工作日判断
 * @author 盈盈
 * @date 2018年4月19日
 */
public class WorkDayUtil {
	private static int flag = 0;
	static HashMap<Integer, List<Integer>> holidays;// 节假日
	static HashMap<Integer, List<Integer>> teshudays;// 特殊工作日(周六.周日)
	Map<Integer, List<Integer>> maps;

	static {
		getHolidays();
		getTeshudays();
	}

	/**
	 * @Title: getHolidays
	 * @Description: 初始化节假日日期,从数据库读取
	 * @return: void
	 * @throws:
	 */
	public static void getHolidays() {
		/*
		 * if(maps.size()>0 && maps!=null){ if(holidays==null){ holidays = new
		 * HashMap<>(); for ( Map.Entry<Integer,List<Integer>> map:
		 * maps.entrySet()) { holidays.put(map.getKey(), map.getValue()); } } }
		 */
		if (holidays == null) {
			holidays = new HashMap<Integer, List<Integer>>();
			holidays.put(1, Arrays.asList(1));
			holidays.put(2, Arrays.asList(15, 16, 17, 18, 19, 20, 21));
			holidays.put(4, Arrays.asList(5, 6, 7, 29, 30));
			holidays.put(5, Arrays.asList(1));
			holidays.put(6, Arrays.asList(18));
			holidays.put(9, Arrays.asList(24));
			holidays.put(10, Arrays.asList(1, 2, 3, 4, 5, 6, 7));
		}
	}

	/**
	 * @Title: getTeshudays
	 * @Description: 初始化特殊工作日日期,从数据库读取
	 * @return: void
	 * @throws:
	 */
	public static void getTeshudays() {
		/*
		 * if(maps.size()>0 && maps!=null){ if(teshudays==null){ teshudays = new
		 * HashMap<Integer, List<Integer>>(); for (
		 * Map.Entry<Integer,List<Integer>> map: maps.entrySet()) {
		 * teshudays.put(map.getKey(), map.getValue()); } } }
		 */
		if (teshudays == null) {
			teshudays = new HashMap<>();
			// teshudays.put(1, Arrays.asList(21,22));
			teshudays.put(2, Arrays.asList(11, 24));
			teshudays.put(4, Arrays.asList(8, 28));
			// teshudays.put(5, Arrays.asList(27));
			teshudays.put(9, Arrays.asList(29, 30));
		}
	}

	/**
	 * @Title: addDateByWorkDay
	 * @Description: TODO(这里用一句话描述这个方法的作用)
	 * @param: src
	 * @param: adddays
	 * @return: int
	 * @throws:
	 */
	public int addDateByWorkDay(Calendar src, int adddays) {
		flag = checkHoliday(src);
		return flag;
	}

	/**
	 * @Title: checkHoliday
	 * @Description: 根据传入的date去判断是否是0 工作日,1 休息日,2 节假日
	 * @param: date
	 * @return: int
	 * @throws:
	 */
	public static int  checkHoliday(Calendar date) {
		// 检查是否是周六周日
		if (date.get(Calendar.DAY_OF_WEEK) == Calendar.SATURDAY || date.get(Calendar.DAY_OF_WEEK) == Calendar.SUNDAY) {
			flag = 1;
		}
		// 检查是否是特殊节假日(周末:特殊工作日)
		if (teshudays.containsKey(date.get(Calendar.MONTH) + 1)) {
			for (Map.Entry<Integer, List<Integer>> map : teshudays.entrySet()) {
				if (map.getKey() == (date.get(Calendar.MONTH) + 1)) {
					List<Integer> values = map.getValue();
					for (int i = 0; i < values.size(); i++) {
						if (values.get(i) == date.get(Calendar.DAY_OF_MONTH)) {
							flag = 0;
							break;
						}
					}
					break;
				}
			}
		}
		// 检查是否是节假日
		if (holidays.containsKey(date.get(Calendar.MONTH) + 1)) {
			for (Map.Entry<Integer, List<Integer>> map : holidays.entrySet()) {
				if (map.getKey() == (date.get(Calendar.MONTH) + 1)) {
					List<Integer> values = map.getValue();
					for (int i = 0; i < values.size(); i++) {
						if (values.get(i) == date.get(Calendar.DAY_OF_MONTH)) {
							flag = 2;
							break;
						}
					}
					break;
				}
			}
		}

		return flag;
	}
	/**Date传入当前日期
	 * 当前是工作日时返回true，不是则返回false
	 * @Description: TODO
	 * @param @param d
	 * @param @return   
	 * @return boolean  
	 * @throws
	 * @author 盈盈
	 * @date 2018年4月19日
	 */
	// @SuppressWarnings({ "unused", "static-access" })
	// public static boolean workDay(Date d) throws ParseException{
	// 	Calendar a = Calendar.getInstance();
	// 	String t = a.get(Calendar.YEAR) + "0101";
	// 	SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
	// 	Calendar calendarStart = Calendar.getInstance();
	// 	Calendar calendarEnd = Calendar.getInstance();
	// 	Date time = sdf.parse(t);
	// 	calendarStart.setTime(time);
	// 	calendarEnd.setTime(time);
	// 	calendarEnd.add(Calendar.YEAR, 1);
	// 	Date first = calendarStart.getTime();
	// 	Date next = calendarEnd.getTime();
	// 	List<String> list = new ArrayList<String>();
	// 	while (first.getTime() < next.getTime()) {
	// 		int result = new AcquisitionWorkDay().addDateByWorkDay(calendarStart, 1);
	// 		if (result == 0) {
    //                             //可打印出整年的的工作日期       
	// 			//System.out.println(sdf.format(first.getTime()));
	// 			//list.add(sdf.format(first.getTime()));
	// 			if (d.equals(first)) {
	// 				return true;
	// 			}
	// 		}
	// 		calendarStart.add(calendarStart.DATE, 1);
	// 		first = calendarStart.getTime();
	// 		calendarStart.getTime();
	// 	}
	// 	return false;
	// }
}