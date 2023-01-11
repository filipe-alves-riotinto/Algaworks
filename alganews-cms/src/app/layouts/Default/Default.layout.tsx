import confirm from '../../../core/utils/confirm'
import info from '../../../core/utils/info'
import Logo from '../../components/Logo'
import NavBar from '../../components/NavBar'
import SessionController from '../../components/SessionController'
import * as DL from './Default.layout.styles'

interface DefaultLayoytProps {
    children: React.ReactNode
}

function DefaultLayout (props: DefaultLayoytProps) {
    return <DL.Wrapper>
        <DL.Header>
            <Logo/>
        </DL.Header>
        <DL.Main>
            <DL.Navigation>
                <NavBar/>
            </DL.Navigation>
            <DL.FeaturedContent>
                {props.children}
            </DL.FeaturedContent>
            <DL.Aside>
                <SessionController
                    name="Filipe"
                    description='Administrador'
                    onLogout={() => {
                        confirm({
                            title: 'Você quer deslogar?',
                            onConfirm: () => {
                                info({
                                    title:'Você foi deslogado',
                                    description:'Você será redirecionado para a página de login',
                                })
                            },
                            onCancel: () => window.alert("cancelou")
                        })
                    }}
                />
            </DL.Aside>
        </DL.Main>
    </DL.Wrapper>
}

export default DefaultLayout