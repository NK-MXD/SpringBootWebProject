package com.yf.exam.modules.sys.depart.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;

/**
* <p>
* 高校信息数据传输类
* </p>
*
* @author  软工小队
*/
@Data
@ApiModel(value="高校信息", description="高校信息")
public class SysDepartDTO implements Serializable {

    private static final long serialVersionUID = 1L;
    
    
    @ApiModelProperty(value = "ID", required=true)
    private String id;
    
    @ApiModelProperty(value = "1公司2部门", required=true)
    private Integer deptType;
    
    @ApiModelProperty(value = "所属上级", required=true)
    private String parentId;
    
    @ApiModelProperty(value = "部门名称", required=true)
    private String deptName;
    
    @ApiModelProperty(value = "部门编码", required=true)
    private String deptCode;
    
    @ApiModelProperty(value = "排序", required=true)
    private Integer sort;
    
}
