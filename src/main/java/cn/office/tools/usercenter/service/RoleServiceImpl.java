package cn.office.tools.usercenter.service;

import java.math.BigInteger;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.office.tools.usercenter.dao.Role;
import cn.office.tools.usercenter.mapper.RoleMapper;

@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleMapper roleMapper;

    @Override
    public List<Role> getAllRoles() {
        return roleMapper.getAllRoles();
    }

    @Override
    public Role getRoleById(BigInteger id) {
        return roleMapper.getRoleById(id);
    }

    @Override
    public int insertRole(Role role) {
        return roleMapper.insertRole(role);
    }

    @Override
    public int updateRole(Role role) {
        return roleMapper.updateRole(role);
    }

    @Override
    public int deleteRole(BigInteger id) {
        return roleMapper.deleteRole(id);
    }
}