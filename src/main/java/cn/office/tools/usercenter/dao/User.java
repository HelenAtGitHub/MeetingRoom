package cn.office.tools.usercenter.dao;

import java.math.BigInteger;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

import org.springframework.data.annotation.Id;
import org.springframework.security.core.userdetails.UserDetails;


public class User implements UserDetails {
    /**
     *
     */
    private static final long serialVersionUID = 1L;
    @Id
    private BigInteger id;
    private String name;
    private String username;
    private String password;
    private int isDelete;
    private LocalDateTime passwordUpdateTime;
    private LocalDateTime lastLoginTime;
    private LocalDateTime createTime;
    private LocalDateTime updateTime;
    
    private List<Role> authorities;

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

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
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

    public List<Role> getAuthorities() {
        return this.authorities;
    }

    public void setAuthorities(List<Role> authorities) {
        this.authorities = authorities;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof User)) {
            return false;
        }
        User user = (User) o;
        return id == user.id && Objects.equals(name, user.name) && Objects.equals(username, user.username)
                && Objects.equals(password, user.password) && isDelete == user.isDelete
                && Objects.equals(passwordUpdateTime, user.passwordUpdateTime)
                && Objects.equals(lastLoginTime, user.lastLoginTime) && Objects.equals(createTime, user.createTime)
                && Objects.equals(updateTime, user.updateTime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, username, password, isDelete, passwordUpdateTime, lastLoginTime, createTime,
                updateTime);
    }

    @Override
    public String toString() {
        return "{" + " id='" + getId() + "'" + ", name='" + getName() + "'" + ", userName='" + getUsername() + "'"
                + ", password='" + getPassword() + "'" + ", isDelete='" + getIsDelete() + "'" + ", passwordUpdateTime='"
                + getPasswordUpdateTime() + "'" + ", lastLoginTime='" + getLastLoginTime() + "'" + ", createTime='"
                + getCreateTime() + "'" + ", updateTime='" + getUpdateTime() + "'" + "}";
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}