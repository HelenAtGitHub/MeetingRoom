package cn.office.tools.usercenter.dao;

import java.math.BigInteger;
import java.time.LocalDateTime;
import java.util.Objects;

import org.springframework.security.core.GrantedAuthority;


public class Role  implements GrantedAuthority {
    
    private static final long serialVersionUID = 1L;
    
    private BigInteger id;
	private String name;
	private String displayName;
	private int isDefault;
	private int isDeleted;
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

    public int getIsDefault() {
        return this.isDefault;
    }

    public void setIsDefault(int isDefault) {
        this.isDefault = isDefault;
    }

    public int getIsDeleted() {
        return this.isDeleted;
    }

    public void setIsDeleted(int isDeleted) {
        this.isDeleted = isDeleted;
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
        if (!(o instanceof Role)) {
            return false;
        }
        Role role = (Role) o;
        return Objects.equals(id, role.id) && Objects.equals(name, role.name) && Objects.equals(displayName, role.displayName) && isDefault == role.isDefault && isDeleted == role.isDeleted && Objects.equals(createTime, role.createTime) && Objects.equals(updateTime, role.updateTime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, displayName, isDefault, isDeleted, createTime, updateTime);
    }
    

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", name='" + getName() + "'" +
            ", displayName='" + getDisplayName() + "'" +
            ", isDefault='" + getIsDefault() + "'" +
            ", isDeleted='" + getIsDeleted() + "'" +
            ", createTime='" + getCreateTime() + "'" +
            ", updateTime='" + getUpdateTime() + "'" +
            "}";
    }


    @Override
    public String getAuthority() {
        return this.name;
    }
    
}