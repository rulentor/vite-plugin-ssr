<template>
    <aside id="sidebar2" class="sidebar break-point-lg has-bg-image">
      <div class="image-wrapper">
        <!-- <img src="https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg" alt="sidebar background" /> -->
      </div>
      <div class="sidebar-layout">
        <div class="sidebar-header2"  > 
          <div class="sidebar-content">
            <nav class="menu open-current-submenu">
              <ul>
                <li class="menu-item sub-menu">
                  <a class="abtn" href="#">
                    
                    <img class="avatar" src="/images/avatar-1.jpg"/>
                    <div>
                    <span style="
                            font-size: 14px;
                            letter-spacing: 1px;
                            font-weight: bold;
                            padding-left: 15px;
                          "> Nick Paten</span>
                          <br>
                          <span class="only"> Online</span>
                  </div>
                  </a>
                  <div class="sub-menu-list">
                    <ul>
                      <div class="sidebar-content">
                        <nav class="menu open-current-submenu">
                          <ul>
                            <li>
                              <div class="frends">
                                <img class="avatar" src="/images/avatar-1.jpg"/>
                                <div>
                                <div class="name-frends"> Nick Paten</div>
                                <div class="chat-casper">Brandon Smith
                                  Hello</div></div>
                                
                              </div>
                            </li>
                            <li>
                                    <div class="frends">
                                      <img class="avatar" src="/images/avatar-1.jpg"/>
                                      <div>
                                      <div class="name-frends"> Nick Paten</div>
                                      <div class="chat-casper">Brandon Smith
                                        Hello</div></div>
                                      
                                    </div>
                            </li>
                            <li>
                                          <div class="frends">
                                            <img class="avatar" src="/images/avatar-1.jpg"/>
                                            <div>
                                            <div class="name-frends"> Nick Paten</div>
                                            <div class="chat-casper">Are we going to have this week's planning meeting today?</div></div>
                                            
                                          </div>
                            </li>
                            <li>
                                                <div class="frends">
                                                  <img class="avatar" src="/images/avatar-1.jpg"/>
                                                  <div>
                                                  <div class="name-frends"> Nick Paten</div>
                                                  <div class="chat-casper">Brandon Smith
                                                    Hello</div></div>
                                                  
                                                </div>
                            </li>
                            <li>
                                                      <div class="frends">
                                                        <img class="avatar" src="/images/avatar-1.jpg"/>
                                                        <div>
                                                        <div class="name-frends"> Nick Paten</div>
                                                        <div class="chat-casper">Brandon Smith
                                                          Hello</div></div>
                                                        
                                                      </div>
                            </li>
                            <li>
                                                            <div class="frends">
                                                              <img class="avatar" src="/images/avatar-1.jpg"/>
                                                              <div>
                                                              <div class="name-frends"> Nick Paten</div>
                                                              <div class="chat-casper">Brandon Smith
                                                                Hello</div></div>
                                                              
                                                            </div>
                            </li>
                        </ul>
						</nav>
                        </div>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        
      </div>
       

        </div>
        <div class="sidebar-footer"><span>Sidebar footer</span></div>

    </aside>
</template>
<script async setup lang="ts">
import { ref } from 'vue'
defineProps({
  stateuser: Object,
  default: {}
})

</script>
<style scoped></style>