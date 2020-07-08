package cn.office.tools.usercenter.dao;

import java.math.BigInteger;
import java.time.LocalDateTime;
import java.util.Objects;

public class PermissionRole {
    private BigInteger id;
	private BigInteger roleId;
	private BigInteger permissionId;
    private LocalDateTime createTime;
    

    public BigInteger getId() {
        return this.id;
    }

    public void setId(BigInteger id) {
        this.id = id;
    }

    public BigInteger getRoleId() {
        return this.roleId;
    }

    public void setRoleId(BigInteger roleId) {
        this.roleId = roleId;
    }

    public BigInteger getPermissionId() {
        return this.permissionId;
    }

    public void setPermissionId(BigInteger permissionId) {
        this.permissionId = permissionId;
    }

    public LocalDateTime getCreateTime() {
        return this.createTime;
    }

    public void setCreateTime(LocalDateTime createTime) {
        this.createTime = createTime;
    }

    public PermissionRole id(BigInteger id) {
        this.id = id;
        return this;
    }

    public PermissionRole roleId(BigInteger roleId) {
        this.roleId = roleId;
        return this;
    }

    public PermissionRole permissionId(BigInteger permissionId) {
        this.permissionId = permissionId;
        return this;
    }

    public PermissionRole createTime(LocalDateTime createTime) {
        this.createTime = createTime;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof PermissionRole)) {
            return false;
        }
        PermissionRole permissionRole = (PermissionRole) o;
        return Objects.equals(id, permissionRole.id) && Objects.equals(roleId, permissionRole.roleId) && Objects.equals(permissionId, permissionRole.permissionId) && Objects.equals(createTime, permissionRole.createTime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, roleId, permissionId, createTime);
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", roleId='" + getRoleId() + "'" +
            ", permissionId='" + getPermissionId() + "'" +
            ", createTime='" + getCreateTime() + "'" +
            "}";
    }
    
}