package com.yf.exam.modules.sys.user.dto.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;

/**
 * <p>
 * 获取用户信息类
 * </p>
 *
 * @author 软工小队
 */
@Data
@ApiModel(value="获取用户信息类", description="获取用户信息类")
public class SysUserDetailReqDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "用户名", required=true)
    private String username;
}
