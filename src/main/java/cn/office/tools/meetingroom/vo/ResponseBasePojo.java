package cn.office.tools.meetingroom.vo;

import java.io.Serializable;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class ResponseBasePojo implements Serializable {
    public Object data;
    public int code;

    public ResponseBasePojo() {
    }

    public ResponseBasePojo(Object data, int code) {
        this.data = data;
        this.code = code;
    }

    public Object getData() {
        return this.data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public int getCode() {
        return this.code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public ResponseBasePojo data(Object data) {
        this.data = data;
        return this;
    }

    public ResponseBasePojo code(int code) {
        this.code = code;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof ResponseBasePojo)) {
            return false;
        }
        ResponseBasePojo responseBasePojo = (ResponseBasePojo) o;
        return Objects.equals(data, responseBasePojo.data) && code == responseBasePojo.code;
    }

    @Override
    public int hashCode() {
        return Objects.hash(data, code);
    }

    @Override
    public String toString() {
        return "{" +
            " data='" + getData() + "'" +
            ", code='" + getCode() + "'" +
            "}";
    }
}
