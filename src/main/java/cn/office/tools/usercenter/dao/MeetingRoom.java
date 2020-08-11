package cn.office.tools.usercenter.dao;

import java.time.LocalDateTime;
import java.util.Objects;

public class MeetingRoom {
     private int id;
     private String name;
     private int status;
     private int floor;

    public MeetingRoom() {
    }

    public MeetingRoom(int id, String name, int status, int floor, LocalDateTime CreateTime) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.floor = floor;
        this.CreateTime = CreateTime;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getStatus() {
        return this.status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public int getFloor() {
        return this.floor;
    }

    public void setFloor(int floor) {
        this.floor = floor;
    }

    public LocalDateTime getCreateTime() {
        return this.CreateTime;
    }

    public void setCreateTime(LocalDateTime CreateTime) {
        this.CreateTime = CreateTime;
    }

    public MeetingRoom id(int id) {
        this.id = id;
        return this;
    }

    public MeetingRoom name(String name) {
        this.name = name;
        return this;
    }

    public MeetingRoom status(int status) {
        this.status = status;
        return this;
    }

    public MeetingRoom floor(int floor) {
        this.floor = floor;
        return this;
    }

    public MeetingRoom CreateTime(LocalDateTime CreateTime) {
        this.CreateTime = CreateTime;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof MeetingRoom)) {
            return false;
        }
        MeetingRoom meetingRoom = (MeetingRoom) o;
        return id == meetingRoom.id && Objects.equals(name, meetingRoom.name) && status == meetingRoom.status && floor == meetingRoom.floor && Objects.equals(CreateTime, meetingRoom.CreateTime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, status, floor, CreateTime);
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", name='" + getName() + "'" +
            ", status='" + getStatus() + "'" +
            ", floor='" + getFloor() + "'" +
            ", CreateTime='" + getCreateTime() + "'" +
            "}";
    }
     private LocalDateTime CreateTime;
    
}