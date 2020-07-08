package cn.office.tools.usercenter.dao;

import java.math.BigInteger;
import java.time.LocalDateTime;
import java.util.Objects;


public class Permission {
    private BigInteger id;
	private String name;
	private String displayName;
	private int isGranted;
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

    public String getDisplayName() {
        return this.displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public int getIsGranted() {
        return this.isGranted;
    }

    public void setIsGranted(int isGranted) {
        this.isGranted = isGranted;
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

    public Permission id(BigInteger id) {
        this.id = id;
        return this;
    }

    public Permission name(String name) {
        this.name = name;
        return this;
    }

    public Permission displayName(String displayName) {
        this.displayName = displayName;
        return this;
    }

    public Permission isGranted(int isGranted) {
        this.isGranted = isGranted;
        return this;
    }

    public Permission createTime(LocalDateTime createTime) {
        this.createTime = createTime;
        return this;
    }

    public Permission updateTime(LocalDateTime updateTime) {
        this.updateTime = updateTime;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof Permission)) {
            return false;
        }
        Permission permission = (Permission) o;
        return Objects.equals(id, permission.id) && Objects.equals(name, permission.name) && Objects.equals(displayName, permission.displayName) && isGranted == permission.isGranted && Objects.equals(createTime, permission.createTime) && Objects.equals(updateTime, permission.updateTime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, displayName, isGranted, createTime, updateTime);
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", name='" + getName() + "'" +
            ", displayName='" + getDisplayName() + "'" +
            ", isGranted='" + getIsGranted() + "'" +
            ", createTime='" + getCreateTime() + "'" +
            ", updateTime='" + getUpdateTime() + "'" +
            "}";
    }
    
}