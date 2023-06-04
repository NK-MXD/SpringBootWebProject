package com.yf.exam.modules.sys.user.dto.response;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * <p>
 * 获取用户信息类
 * </p>
 *
 * @author 软工小队
 */
@Data
@ApiModel(value="获取用户信息类", description="获取用户信息类")
public class SysUserDetailDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "ID", required=true)
    private String id;

    @ApiModelProperty(value = "用户名", required=true)
    private String userName;

    @ApiModelProperty(value = "真实姓名", required=true)
    private String realName;

    @ApiModelProperty(value = "密码", required=true)
    private String password;

    @ApiModelProperty(value = "电话号码", required=true)
    private String phone;

    @ApiModelProperty(value = "身份证号", required=true)
    private String chnid;

    @ApiModelProperty(value = "密码盐", required=true)
    private String salt;

    @ApiModelProperty(value = "角色列表", required=true)
    private String roleIds;

    @ApiModelProperty(value = "部门ID", required=true)
    private String departId;

    @ApiModelProperty(value = "创建时间", required=true)
    private Date createTime;

    @ApiModelProperty(value = "更新时间", required=true)
    private Date updateTime;

    @ApiModelProperty(value = "状态", required=true)
    private Integer state;
}
