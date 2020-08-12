package cn.office.tools.usercenter.service;

import java.math.BigInteger;
import java.util.List;

import cn.office.tools.usercenter.dao.Role;

public interface RoleService {
    List<Role> getAllRoles();

    Role getRoleById(BigInteger id);

    int insertRole(Role role);

    int updateRole(Role role);

    int deleteRole(BigInteger id);
}