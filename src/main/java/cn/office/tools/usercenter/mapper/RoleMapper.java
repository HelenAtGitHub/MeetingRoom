package cn.office.tools.usercenter.mapper;

import java.math.BigInteger;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import cn.office.tools.usercenter.dao.Role;


@Mapper
public interface RoleMapper {
    @Select("SELECT * FROM sys_role as r inner join sys_user_role as ur on ur.role_id = r.id WHERE ur.user_id = #{userId}")
    List<Role> getRolesByUserId(@Param("userId")BigInteger userId);
}