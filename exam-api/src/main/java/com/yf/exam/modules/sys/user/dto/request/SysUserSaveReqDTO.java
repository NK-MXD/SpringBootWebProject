package com.yf.exam.modules.sys.user.dto.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

/**
* <p>
* 管理员登录请求类
* </p>
*
* @author  软工小队
*/
@Data
@ApiModel(value="管理员保存请求类", description="管理员保存请求类")
public class SysUserSaveReqDTO implements Serializable {

    @ApiModelProperty(value = "ID", required=true)
    private String id;

    @ApiModelProperty(value = "用户名", required=true)
    private String userName;

    @ApiModelProperty(value = "头像", required=true)
    private String avatar;

    @ApiModelProperty(value = "真实姓名", required=true)
    private String realName;

    @ApiModelProperty(value = "密码", required=true)
    private String password;

    @ApiModelProperty(value = "电话号码", required=true)
    private String phone;

    @ApiModelProperty(value = "身份证号", required=true)
    private String chnid;

    @ApiModelProperty(value = "部门", required=true)
    private String departId;

    @ApiModelProperty(value = "角色列表", required=true)
    private List<String> roles;
    
}
