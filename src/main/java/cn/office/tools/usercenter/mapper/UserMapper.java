package cn.office.tools.usercenter.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import cn.office.tools.usercenter.dao.User;

@Mapper
public interface UserMapper {
    @Select("select * from user")
    List<User> getAllUsers();
    @Select("select * from user where id = #{id}")
    User getUserById(@Param("id")int id);
    @Insert("insert into user values(#{user.id},#{user.name},#{user.userName},#{user.password},#{user.isDelete},#{user.passwordUpdateTime},#{user.lastLoginTime},#{user.createTime},#{user.updateTime})")
    int insertUser(@Param("user") User user);
    @Update("update user set name=#{user.name},user_name=#{user.userName},password=#{user.password},is_delete=#{user.delete} where id=#{user.id}")
    int updateUser(@Param("user") User user);
    @Delete("delete from user where id=#{id} ")
    int deleteUser(@Param("id")int id);
}