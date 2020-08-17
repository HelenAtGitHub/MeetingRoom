package cn.office.tools.meetingroom.dao;

//import java.time;
import java.sql.Time;
import java.time.LocalDateTime;
import java.util.Objects;

public class RoomTimeperiod {
    private int id;
    private String startTime;
    private String endTime;

    public RoomTimeperiod() {
    }

    public RoomTimeperiod(int id, String startTime, String endTime, int status, LocalDateTime createTime) {
        this.id = id;
        this.startTime = startTime;
        this.endTime = endTime;
        this.status = status;
        this.createTime = createTime;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStartTime() {
        return this.startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return this.endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public int getStatus() {
        return this.status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public LocalDateTime getCreateTime() {
        return this.createTime;
    }

    public void setCreateTime(LocalDateTime createTime) {
        this.createTime = createTime;
    }

    public RoomTimeperiod id(int id) {
        this.id = id;
        return this;
    }

    public RoomTimeperiod startTime(String startTime) {
        this.startTime = startTime;
        return this;
    }

    public RoomTimeperiod endTime(String endTime) {
        this.endTime = endTime;
        return this;
    }

    public RoomTimeperiod status(int status) {
        this.status = status;
        return this;
    }

    public RoomTimeperiod createTime(LocalDateTime createTime) {
        this.createTime = createTime;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof RoomTimeperiod)) {
            return false;
        }
        RoomTimeperiod roomTimeperiod = (RoomTimeperiod) o;
        return id == roomTimeperiod.id && Objects.equals(startTime, roomTimeperiod.startTime) && Objects.equals(endTime, roomTimeperiod.endTime) && status == roomTimeperiod.status && Objects.equals(createTime, roomTimeperiod.createTime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, startTime, endTime, status, createTime);
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", startTime='" + getStartTime() + "'" +
            ", endTime='" + getEndTime() + "'" +
            ", status='" + getStatus() + "'" +
            ", createTime='" + getCreateTime() + "'" +
            "}";
    }
    private int status;
    private LocalDateTime createTime;
}