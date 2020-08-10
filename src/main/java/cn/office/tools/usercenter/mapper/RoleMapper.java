package cn.office.tools.usercenter.mapper;

import java.math.BigInteger;
import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import cn.office.tools.usercenter.dao.Role;


@Mapper
public interface RoleMapper {
    @Select("SELECT * FROM sys_role as r inner join sys_user_role as ur on ur.role_id = r.id WHERE ur.user_id = #{userId}")
    List<Role> getRolesByUserId(@Param("userId")BigInteger userId);
    @Select("select * from sys_role")
    List<Role> getAllRoles();
    @Select("select * from sys_role where id = #{id}")
    Role getRoleById(@Param("id")BigInteger id);
    @Insert("insert into sys_role")
    int insertRole(@Param("role") Role role);
    @Update("update sys_role where id=#{role.id}")
    int updateRole(@Param("role") Role role);
    @Delete("delete from sys_role where id=#{id}")
    int deleteRole(@Param("id")BigInteger id);
}