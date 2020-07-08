package cn.office.tools.usercenter.dao;

import java.math.BigInteger;
import java.time.LocalDateTime;
import java.util.Objects;

public class User {
    private BigInteger id;
    private String name;
    private String userName;
    private String password;
    private int isDelete;
    private LocalDateTime passwordUpdateTime;
    private LocalDateTime lastLoginTime;
    private LocalDateTime createTime;
    private LocalDateTime updateTime;

    public BigInteger getId() {
        return this.id;
    }

    public void setId(BigInteger id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUserName() {
        return this.userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getIsDelete() {
        return this.isDelete;
    }

    public void setIsDelete(int isDelete) {
        this.isDelete = isDelete;
    }

    public LocalDateTime getPasswordUpdateTime() {
        return this.passwordUpdateTime;
    }

    public void setPasswordUpdateTime(LocalDateTime passwordUpdateTime) {
        this.passwordUpdateTime = passwordUpdateTime;
    }

    public LocalDateTime getLastLoginTime() {
        return this.lastLoginTime;
    }

    public void setLastLoginTime(LocalDateTime lastLoginTime) {
        this.lastLoginTime = lastLoginTime;
    }

    public LocalDateTime getCreateTime() {
        return this.createTime;
    }

    public void setCreateTime(LocalDateTime createTime) {
        this.createTime = createTime;
    }

    public LocalDateTime getUpdateTime() {
        return this.updateTime;
    }

    public void setUpdateTime(LocalDateTime updateTime) {
        this.updateTime = updateTime;
    }


    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof User)) {
            return false;
        }
        User user = (User) o;
        return id == user.id && Objects.equals(name, user.name) && Objects.equals(userName, user.userName) && Objects.equals(password, user.password) && isDelete == user.isDelete && Objects.equals(passwordUpdateTime, user.passwordUpdateTime) && Objects.equals(lastLoginTime, user.lastLoginTime) && Objects.equals(createTime, user.createTime) && Objects.equals(updateTime, user.updateTime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, userName, password, isDelete, passwordUpdateTime, lastLoginTime, createTime, updateTime);
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", name='" + getName() + "'" +
            ", userName='" + getUserName() + "'" +
            ", password='" + getPassword() + "'" +
            ", isDelete='" + getIsDelete() + "'" +
            ", passwordUpdateTime='" + getPasswordUpdateTime() + "'" +
            ", lastLoginTime='" + getLastLoginTime() + "'" +
            ", createTime='" + getCreateTime() + "'" +
            ", updateTime='" + getUpdateTime() + "'" +
            "}";
    }

}