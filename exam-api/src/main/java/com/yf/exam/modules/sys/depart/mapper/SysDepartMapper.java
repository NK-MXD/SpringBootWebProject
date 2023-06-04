package com.yf.exam.modules.sys.depart.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.yf.exam.modules.sys.depart.dto.SysDepartDTO;
import com.yf.exam.modules.sys.depart.dto.response.SysDepartTreeDTO;
import com.yf.exam.modules.sys.depart.entity.SysDepart;
import org.apache.ibatis.annotations.Param;

/**
* <p>
* 高校信息Mapper
* </p>
*
* @author  软工小队
*/
public interface SysDepartMapper extends BaseMapper<SysDepart> {

    /**
     * 部门树分页
     * @param page
     * @param query
     * @return
     */
    IPage<SysDepartTreeDTO> paging(Page page, @Param("query") SysDepartDTO query);
}
