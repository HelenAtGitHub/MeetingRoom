package cn.office.tools.usercenter.dao;

import java.math.BigInteger;
import java.time.LocalDateTime;
import java.util.Objects;

public class UserRole {
    private BigInteger id;
	private BigInteger roleId;
	private BigInteger userId;
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

    public BigInteger getUserId() {
        return this.userId;
    }

    public void setUserId(BigInteger userId) {
        this.userId = userId;
    }

    public LocalDateTime getCreateTime() {
        return this.createTime;
    }

    public void setCreateTime(LocalDateTime createTime) {
        this.createTime = createTime;
    }

    public UserRole id(BigInteger id) {
        this.id = id;
        return this;
    }

    public UserRole roleId(BigInteger roleId) {
        this.roleId = roleId;
        return this;
    }

    public UserRole userId(BigInteger userId) {
        this.userId = userId;
        return this;
    }

    public UserRole createTime(LocalDateTime createTime) {
        this.createTime = createTime;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof UserRole)) {
            return false;
        }
        UserRole userRole = (UserRole) o;
        return Objects.equals(id, userRole.id) && Objects.equals(roleId, userRole.roleId) && Objects.equals(userId, userRole.userId) && Objects.equals(createTime, userRole.createTime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, roleId, userId, createTime);
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", roleId='" + getRoleId() + "'" +
            ", userId='" + getUserId() + "'" +
            ", createTime='" + getCreateTime() + "'" +
            "}";
    }
    
}